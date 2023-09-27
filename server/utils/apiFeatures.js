class ApiFeatures {
    constructor(query, api_querystr) {
        this.query = query                    // collection.find()
        this.api_querystr = api_querystr      // req.query
        this.results;
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
                    $regex: keyword,
                    $options: 'i'
                }
            }
        }
        console.log(conditions)
        
        // implementing collection.find().find({ name: { '$regex': 'key.value', '$options': 'i' } })
        this.results = this.query.find(conditions)
        
        return this;        // returning 'this' to enable method channing inside class 
    }

    // implementing filter method
    filter() {
        const query_copy = {...this.api_querystr}
        const remove_fields = ['keyword', 'limit', 'page']

        remove_fields.forEach((key) => delete query_copy[key])
        // console.log(query_copy)

        let queryStr = JSON.stringify(query_copy)
        console.log(queryStr)
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

        console.log(JSON.parse(queryStr))

        this.results = this.query.find(JSON.parse(queryStr))
        
        return this;
    }
}

module.exports = ApiFeatures 