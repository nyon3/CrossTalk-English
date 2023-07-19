/**
 * HeadlineComponent
 *
 * This component displays the main headline text of the Jumbotron. The text is styled to be more noticeable and is
 * typically used to convey the primary message or goal of the website.
 *
 * @component
 * @prop {string[]} headline - An array of strings, each representing a line of the headline text.
 */

const HeadlineComponent = ({ headline }) => (
  <div>
    {headline.map((line, i) => (
      <p key={i}>{line}</p>
    ))}
  </div>
);
export default HeadlineComponent;
