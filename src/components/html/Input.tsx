type InputProps = React.ComponentProps<'input'>;

const CustomProps = (props: InputProps) => {
  return (
    <>
      <input {...props} />
    </>
  );
};

export default CustomProps;
