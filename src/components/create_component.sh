#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "Usage: ./create_component.sh COMPONENT_NAME"
  exit 1
fi

NAME=$1
DIR="./$NAME"


mkdir -p "$DIR"


cat <<EOF > "$DIR/index.js"
import $NAME from "./$NAME"

export default $NAME
EOF


cat <<EOF > "$DIR/$NAME.jsx"
import './$NAME.scss'

const $NAME = (props) => {

}

export default $NAME
EOF


touch "$DIR/$NAME.scss"

echo "Component $NAME created successfully!"
