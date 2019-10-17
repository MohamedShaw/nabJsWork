import Validator from "validatorjs";

export default class ValidationManager {

    inputsValue;

    inputs = [];

    addInput = (input) => {
        this.inputs.push(input)
    };

    validate = () => {
        let data = {};
        let rules = {};
        let attributeNames = {};

        for (key in this.inputs) {
            let input = this.inputs[key];
            data[input.fieldName] = input.inputValue;
            rules[input.fieldName] = input.constraints;
            attributeNames[input.fieldName] = input.attributeName;
        }

        let validation = new Validator(data, rules);
        validation.setAttributeNames(attributeNames);
        this.inputsValue = data;

        if (validation.fails()) {
            for (key in this.inputs) {
                let input = this.inputs[key];
                let firstError = validation.errors.first(input.fieldName);
                if (!firstError) {
                    input.setError(null);
                    continue;
                }
                input.setError(firstError);
            }
            return false
        }
        else {
            for (key in this.inputs) {
                let input = this.inputs[key];
                input.setError(null);
            }
            return true
        }
    };
}