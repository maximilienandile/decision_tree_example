
var tree_generator = require('./library/tree_generator');



var training_data = [
  {"has_a_car":"yes", "has_a_house":"yes","label":"good_borrower"},
  {"has_a_car":"yes", "has_a_house":"yes","label":"good_borrower"},
  {"has_a_car":"yes", "has_a_house":"no","label":"bad_borrower"},
  {"has_a_car":"no", "has_a_house":"yes","label":"bad_borrower"},
  {"has_a_car":"no", "has_a_house":"yes","label":"bad_borrower"}
]

console.log(JSON.stringify(tree_generator.generate_decision_tree(training_data)));
