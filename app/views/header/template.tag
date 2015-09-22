header.pure-g
    .pure-u-1.pure-u-md-1-4
        h1 { title }
    <yield/>

    script.
        this.title = 'Project Title';
        console.log('header')
