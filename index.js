import htmlContent from './form.html';

export default {
    async fetch(request, env, ctx) {
        return new Response(htmlContent, {
            headers: {
                'content-type': 'text/html;charset=UTF-8',
            },
        });
    },
};
