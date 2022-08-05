export default {
    name: 'restaurant',
    type: 'document',
    title: 'Restaurant',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Restaurant Name',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short Description',
            validation: (Rule) => Rule.max(200)
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the Restaurant',
        },
        {
            name: 'lat',
            type: 'string',
            title: 'Latitude of the Restaurant',
        },
        {
            name: 'lng',
            type: 'string',
            title: 'Longitude of the Restaurant',
        },
        {
            name: 'address',
            type: 'string',
            title: 'Restaurant Address',
            validation: (Rule) => Rule.required()
        }, 
        {
            name: 'rating',
            type: 'number',
            title: 'Enter a Rating from (1-5 Stars)',
            validation: (Rule) => Rule.required().min(1).max(5).error("Please Enter a value between 1 and 5")
        },
        {
            name: 'type',
            title: 'Category',
            validation: (Rule) => Rule.required(),
            type: 'reference',
            to: [{ type: 'category' }]
        },
        {
            name: 'dishes',
            title: 'Dishes',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'dish' }] }]
        },         
    ]
}