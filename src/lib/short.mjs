// "The short version" box: three lines at the top of every page for readers who want the answer first.
export const short = ({ answer, who, next }) => `<aside class="short" aria-label="The short version"><p class="short-t">The short version</p><dl>
<dt>The answer</dt><dd>${answer}</dd>
<dt>Who this is for</dt><dd>${who}</dd>
<dt>Your next step</dt><dd>${next}</dd>
</dl></aside>`;
