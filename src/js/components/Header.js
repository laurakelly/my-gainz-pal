var React = require('react');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <h1 className="logo">My Gainz Pal</h1>
      </header>
    )
  }
});

module.exports = Header;