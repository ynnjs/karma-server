const Ynn = require( 'ynn' );

module.exports = new Ynn( {
    root : __dirname,
    routers() {
        this.router.add( '/', ctx => {
            ctx.body = {
                success : true
            };
        } );
    }
} );
