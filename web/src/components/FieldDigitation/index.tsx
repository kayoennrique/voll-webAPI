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

const Label = styled.label`
display: block;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: var(--dark-blue);
`;

const Container = styled.div`
width: 100%;
`;

interface Props {
  amount: string,
  kind: string,
  placeholder: string,
  onChange: (value: string) => void,
  label?: string
}

export default function FiledDigitation({ amount, kind, placeholder, onChange, label }: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <Field
        type={kind}
        value={amount}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required
      />
    </Container>
  );
}