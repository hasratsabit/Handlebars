// Register Helper is a method that we can use to concatinate methods in the html Handlebars
module.exports = function(birthYear) {
  var age = new Date().getFullYear() - birthYear;
  return age;

  if(age > 0) {
    return age + " years old";
  }else {
    return "Less than a year old";
  }
};
