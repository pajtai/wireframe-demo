modal(if='{ display }')
    p(onclick='{ close }') X
    h3 { title }
    p { content }
    script.
        var wireframe = require('wireframe-ui/client'),
                self = this;

        wireframe.on('modal:open', function(message) {
            self.display = true;
            self.title = message.title;
            self.content = message.content;
            self.update();
        });

        this.close = function() {
            this.display = false;
            this.update();
        }