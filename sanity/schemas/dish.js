export default {
    name: 'dish',
    type: 'document',
    title: 'Dish',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name of Dish',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'short_description',
            type: 'text',
            title: 'Short Description',
            validation: (Rule) => Rule.max(200)

        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of The Dish',
        },  
    ]
}