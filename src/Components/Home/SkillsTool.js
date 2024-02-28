function SkillsTool(props) {
  const dynamicKeyframes = `
    @keyframes expandWidth {
      to {
        width: ${props.data.per}%;
      }
    }
  `;

  //   const dynamicStyle = {
  //     animation: `expandWidth 5s ease-in-out forwards`,
  //   };
  return (
    <div>
      <div className="skillful-tools-name-per">
        <span>{props.data.skill}</span>
        <span>{props.data.per}</span>
      </div>
      <div className="skillful-tools-grey">
        <div className="skillful-tools-orange"></div>
      </div>
      <style>{dynamicKeyframes}</style>
    </div>
  );
}

export default SkillsTool;
