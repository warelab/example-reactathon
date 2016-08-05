import React from "react";

export default class App extends React.Component {
  render() {
    return (
        <div>
          <div id="header" className="jumbotron">
            <h1>Hello World!</h1>
            <p>This is a subtitle.</p>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <h2>Thing 1</h2>
              <p>Bacon ipsum dolor amet chuck meatloaf sirloin filet mignon swine, donner turkey cupim pork belly
                kielbasa boudin jowl ham hock pancetta pork chop. Picanha tail fatback venison. </p>
            </div>
            <div className="col-sm-4">
              <h2>Thing 2</h2>
              <p>Pig short loin prosciutto, jerky pork belly hamburger alcatra pastrami porchetta cow landjaeger ground
                round. Ham hock doner andouille pig kielbasa.</p>
            </div>
            <div className="col-sm-4">
              <h2>Thing 3</h2>
              <p> Jerky t-bone pancetta prosciutto, salami bresaola ball tip chuck boudin tri-tip kevin chicken. Sausage
                picanha chuck boudin, cupim prosciutto beef ribs ribeye doner alcatra short ribs.</p>
            </div>
          </div>
        </div>
    );
  }
}