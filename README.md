# decision_tree_example

This code snippets are an example on how to build a decision tree using **Shannon Entropy**.

## Files

- `index.js`: contains an example on how to use the library
- `library/best_feature_selector.js` : Method to select the best feature in a data set based on the **information gain** calculated thanks to the **Shannon Entropy**
- `library/data_set_splitter.js` : Method to split a dataset based on one feature and one value of this feature
- `library/shannon_entropy.js` : Method to compute shannon entropy on a dataset.
- `library/tree_generator.js` : The core module that contains an iterative function that will generate the tree

## How to test it ?

```
$ git clone git@github.com:maximilienandile/decision_tree_example.git
$ cd decision_tree_example
$ node index.js
```

## Convention for the dataset

The dataset should be an array. This array contains one object per training example. Each object should have a property called `label` that represents the class of the training example.

```javascript
var training_data = [
  {"has_a_car":"yes", "has_a_house":"yes","label":"good_borrower"},
  {"has_a_car":"yes", "has_a_house":"yes","label":"good_borrower"},
  {"has_a_car":"yes", "has_a_house":"no","label":"bad_borrower"},
  {"has_a_car":"no", "has_a_house":"yes","label":"bad_borrower"},
  {"has_a_car":"no", "has_a_house":"yes","label":"bad_borrower"}
]
```

Here the features are : `has_a_car` and `has_a_house`.

The classes are `good_borrower` or `bad_borrower`

## TO DO

- Generate a visual representation of the tree
- Improve the algorithm
- Try other algorithms
- Try other methods to compute information gain
