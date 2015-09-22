navigation.pure-u-1.pure-u-md-3-4.pure-g
    navigation-item(each='{ nav in navItems }').pure-u-1-3 { nav}

    script.
        console.log('navigation');
        this.navItems = [
                'Home',
                'Gallery',
                'About'
        ];