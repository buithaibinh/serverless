import template from './template.hbs';

/**
 * Returns a HTML output, based on a Handlebars template (SSR)
 *
 * @param event
 * @param context
 * @param callback
 * @returns {Promise<void>}
 */
export const hello = async () => {
  try {
    const data = {
      _html: {
        lang: 'en',
      },
      title: 'Hello world!',
      message: 'Hello world!',
      env: process.env.NODE_ENV,
      someJSON: {
        // Randomly taken from http://json.org/example.html
        glossary: {
          title: 'example glossary',
          GlossDiv: {
            title: 'S',
            GlossList: {
              GlossEntry: {
                ID: 'SGML',
                SortAs: 'SGML',
                GlossTerm: 'Standard Generalized Markup Language',
                Acronym: 'SGML',
                Abbrev: 'ISO 8879:1986',
                GlossDef: {
                  para: 'A meta-markup language, used to create markup languages such as DocBook.',
                  GlossSeeAlso: ['GML', 'XML'],
                },
                GlossSee: 'markup',
              },
            },
          },
        },
      },
    };

    const page = template(data);
    return { statusCode: 200, body: page, headers: { 'Content-Type': 'text/html' } };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: 'Eroor',
    };
  }
};
