declare module Typer{
  function detect(value: Object): String;
  function cast(value: Object, type: String): Object;
}

declare module "typer"{
    export default Typer;
}
