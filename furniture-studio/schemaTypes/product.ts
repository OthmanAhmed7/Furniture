import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
    }),
    defineField({
      name: 'isNew',
      type: 'boolean',
      title: 'is New',
    }),
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'image',
      type: 'url',
      title: 'Image URL',
    }),
    defineField({
      name: 'thumbnailImgs',
      type: 'array',
      title: 'Thumbnail Images',
      of: [{type: 'url', options: {hotspot: true}}],
    }),
  ],
})
