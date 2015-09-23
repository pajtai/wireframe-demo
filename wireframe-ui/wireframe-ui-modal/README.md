# wireframe-ui-modal

To open the modal:

```
require('wireframe-ui/client')
    .trigger('modal:open', {
        title : 'Sign up now!',
        content: 'To buy things, you must first complete our 30 step sign up process.'
    });
```    