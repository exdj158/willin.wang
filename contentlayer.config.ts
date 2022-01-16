/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return,
    @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-argument,
    import/no-extraneous-dependencies, import/no-unresolved, no-underscore-dangle */
import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from 'contentlayer/source-files';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';

const MdxFields = {
  title: {
    type: 'string',
    required: true
  },
  date: { type: 'string', required: true },
  image: { type: 'string', required: false },
  tags: { type: 'list', of: { type: 'string' }, required: false }
};

const computedFields: ComputedFields = {
  meta: {
    type: 'json',
    resolve: (doc) => {
      const { words, minutes } = readingTime(doc.body.raw);
      return {
        words,
        readingTime: Math.ceil(minutes)
      };
    }
  },
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileDir.split('/').pop()
  },
  locale: {
    type: 'string',
    resolve: (doc) => doc._raw.sourceFileName.replace('.mdx', '')
  }
};

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  fields: MdxFields,
  computedFields
}));

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: 'pages/**/*.mdx',
  fields: MdxFields,
  computedFields
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Page],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: []
  }
});
