class ApiFeatures {
    constructor(query, api_querystr) {
        this.query = query                    // collection.find()
        this.api_querystr = api_querystr      // req.query
    }

    // implementing Search method
    search() {
        console.log("the queries are", this.api_querystr)
        let keyword = this.api_querystr.keyword
        // console.log(keyword)
        let conditions;
        if (keyword) {
            conditions = {
                name: {
                    $regex: this.api_querystr.keyword,
                    $options: 'i'
                }
            }
        }
        // console.log(conditions)

        // implementing collection.find().find({ name: { '$regex': 'key.value', '$options': 'i' } })
        const searched_documents = this.query.find(conditions)
        return searched_documents;
    }

    // implementing filter method
    filter() {
        const query_copy = {...this.query}
        console.log(query_copy)
    }
}

module.exports = ApiFeatures