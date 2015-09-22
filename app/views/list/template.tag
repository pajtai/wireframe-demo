list
    ul(each='{ item in list }')
        li { item }

    script.
        this.list = [
                'So much list',
                'List is so list',
                'Many words'
        ];