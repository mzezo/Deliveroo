export default {
    name: 'category',
    type: 'document',
    title: 'Menu Category ',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the Category',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
        },
    ]
}