jest.dontMock('../graphUtils');
jest.dontMock('underscore');

describe("minMax", function() {
  var data = [{"x": 6, "y": 3}, {"x": 3, "y": 9}, {"x": 0, "y": 2}],
    minMax = require("../graphUtils").minMax;

  it("returns min and max value of property, give array of objects and property",
    function() {
        
      expect(minMax(data, "x")).toEqual([0,6]);
    });
});
