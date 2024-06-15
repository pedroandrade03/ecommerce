import { Badge } from "./ui/badge";

export function ProductDescription() {
  return (
    <div className="grid grid-rows-3">
      <div>
        <Badge>Descrição</Badge>
      </div>
      <div>
        <h2>Titulo Here</h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <div>
        <h2>Titulo Here</h2>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
    </div>
  );
}
