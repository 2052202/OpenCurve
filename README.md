# OpenCurve

OpenCurve is a small, preloadable library for generating clustered random numbers. It allows you to define your boundaries once, then easily generate numbers skewed toward a specific peak value—perfect for games and simulations.

## Installation

To install this library, run the following command in your terminal:

```bash
npm install opencurve
```

## Usage

> ⚠️ **Note:** This package utilizes modern ES Modules and currently only supports `import` syntax.

### 1. Import and Setup
First, import the library and initialize your boundaries. Once set, this range cannot be changed for this instance, allowing you to easily reuse the setup.

```javascript
import OpenCurve from "opencurve";

// Create a setup with a minimum of 2 and a maximum of 9
const curve = OpenCurve(2, 9);
```

### 2. Generate Clustered Numbers
To generate a random number, use the `.random()` method and pass in your desired peak. Most of your generated numbers will cluster close to this value. 

For example, to make numbers skew heavily toward 5:

```javascript
const result = curve.random(5);
console.log(result); // Will return a random number tightly clustered around 5
```

## License

MIT
