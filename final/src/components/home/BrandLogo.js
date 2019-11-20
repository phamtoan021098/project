import React,{Component} from 'react';
class BrandLogo extends Component{
    render(){
        return(
            <section class="brand">
            <div class="container">
              <div class="row">
                <div class="col-sm-4">
                  <img src="img/logovans.jpg" alt="" />
                </div>
                <div class="col-sm-4">
                  <img src="img/logoconverse.jpg" alt="" />
                </div>
                <div class="col-sm-4">
                  <img src="img/lolopalladium.jpg" alt="" />
                </div>
              </div>
            </div>
          </section>
        )
    }
}
export default BrandLogo;