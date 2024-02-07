import styled from "styled-components";

const Field = styled.input`
  background: #F0F0F0;
margin: 1em 0;
box-sizing: border-box;
box-shadow: 2px 2px 6px rgba(0,0,0, 0.25);
border-radius: 8px;
border: none;
width: 100%;
padding: 16px;
`;

interface Props {
  amount: string,
  kind: string,
  placeholder: string,
  onChange: (value: string) => void,
  label?: string
}

export default function FieldDigitation({ amount, kind, placeholder, onChange, label }: Props) {
  return (
    <Field
      type={kind}
      value={amount}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      required
    />
  );
}