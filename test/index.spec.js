import is from '@lvchengbin/is';
import biu from '@lvchengbin/biu';

describe( 'karma-server', () => {
    describe( 'variables', () => {
        it( 'server', () => {
            expect( is.object( ynn ) ).toBeTruthy();
        } );

        it( 'server.port', () => {
            expect( is.integer( ynn.port ) ).toBeTruthy();
        } );

        it( 'server.host', () => {
            expect( is.url( ynn.host) ).toBeTruthy();
        } );
    } );

    it( 'static file', done => {
        biu.get( `${ynn.host}/static/home.html` ).then( res => {
            expect( res.trim() ).toEqual( '<h1>HOME</h1>' );
            done();
        } )
    } );

    it( 'request', done => {
        biu.get( `${ynn.host}/home` ).then( res => {
            expect( res ).toEqual( { success : true } );
            done();
        } );
    } );
} );
