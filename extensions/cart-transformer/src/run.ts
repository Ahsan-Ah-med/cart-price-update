import type {
  RunInput,
  FunctionRunResult,
  ProductVariant,
} from "../generated/api";

const NO_CHANGES: FunctionRunResult = {
  operations: [],
};

export function run(input: RunInput): FunctionRunResult {
  console.log("testing2")
  const operations = input.cart.lines.map((cartLine) => {
    console.log("testing1")
    return {
      update: {
        cartLineId: cartLine.id,
        title: `${(cartLine.merchandise as ProductVariant).product.title} - Ahsan`,
        price: {
          adjustment: {
            fixedPricePerUnit: {
              amount: cartLine.attribute?.value ? cartLine.attribute?.value : cartLine.cost.amountPerQuantity.amount
            }
          }
        }
      }
    };
  });

  return {
    operations,
  };
};
