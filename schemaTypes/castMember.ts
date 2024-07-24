import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'castMember',
  title: 'Cast Member',
  type: 'object',
  fields: [
    defineField({
      name: 'characterName',
      title: 'Character Name',
      type: 'string',
    }),
    defineField({
      name: 'showActor',
      title: 'Show Actor',
      type: 'boolean',
    }),
    defineField({
      name: 'person',
      title: 'Actor',
      type: 'reference',
      to: [{type: 'person'}],
      hidden: ({parent}) => !parent?.showActor,
    }),
    defineField({
      name: 'externalId',
      title: 'External ID',
      type: 'number',
    }),
    defineField({
      name: 'externalCreditId',
      title: 'External Credit ID',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      subtitle: 'characterName',
      title: 'person.name',
      media: 'person.image',
    },
  },
})
