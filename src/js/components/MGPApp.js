var Header = require('./Header');
var MainSection = require('./MainSection');
var Footer = require('./Footer');
var React = require('react');

var MGPApp = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div> 
    )
  }
});

module.exports = MGPApp;