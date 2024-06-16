import { Badge } from "./ui/badge";

type ProductDescriptionProps = {
  text: string;
};

export function ProductDescription({ text }: ProductDescriptionProps) {
  return (
    <div className="grid grid-rows-3">
      <div>
        <Badge>Descrição</Badge>
      </div>
      <p>{text}</p>
    </div>
  );
}
