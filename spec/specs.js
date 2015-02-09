describe('leapYear', function() {
  it("is false for years not divisible by 4", function() {
    expect(leapYear(2015)).to.equal(false);
  });

  it("is true for most years divisble by 4", function() {
    expect(leapYear(2016)).to.equal(true);
  });

  it("is false for most years divisble by 100", function() {
    expect(leapYear(2100)).to.equal(false);
  });

  it("is true for years divisible by 400", function(){
    expect(leapYear(2000)).to.equal(true);
  }); 
});
