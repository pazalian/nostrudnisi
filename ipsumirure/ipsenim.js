// Example ctx object with operator and operatorExpression methods
const ctx = {
    operator: function(spec, expr) {
        // Implementation of operator method
        console.log('Operator called with:', spec, expr);
    },
    operatorExpression: function(expr) {
        // Implementation of operatorExpression method
        return expr.toUpperCase(); // Example transformation
    }
};

// Usage
const spec = {
    update: 'someUpdate'
};

// Calling ctx.operator with conditional operatorExpression call
ctx.operator(spec, spec.update ? ctx.operatorExpression(spec.update) : null);
