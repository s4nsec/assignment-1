// Endpoint for querying the fibonacci numbers

import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const num: string = req.params.num;

  const parsedNum = parseInt(num, 10);
  if (isNaN(parsedNum)){
    res.status(400).send("Invalid number format");
    return;
  }

  const fibN = fibonacci(parsedNum);
  let result = `fibonacci(${parsedNum}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${parsedNum}) is undefined`;
  }

  res.send(result);
};
