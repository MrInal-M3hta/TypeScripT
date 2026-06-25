function greet (name:string): string{
    return`Hello, ${name}! Welcome to TypeScript !`;
};

console.log(greet("Mrinal"));

// TypeScript can be installed globally using npm (Node Package Manager) with the command: npm install -g typescript.

// And it can also installed locally in a project using: npm install -D typescript

// npx tsc --init  This command will create a tsconfig.json file in the project directory, which is used to configure the TypeScript compiler options.

// To compile a TypeScript file, you can use the command: npx tsc . This will generate a corresponding JavaScript file (filename.js) in the same directory.

// To run the compiled JavaScript file, you can use the command: node filename.js.