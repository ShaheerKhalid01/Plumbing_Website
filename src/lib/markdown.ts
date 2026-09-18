// Simple markdown-to-HTML for blog post content

export function markdownToHtml(content: string): string {
  return content
    .split('\n')
    .map((line) => {
      if (line.startsWith('## '))
        return `<h2 class="text-2xl font-black text-white mt-10 mb-4">${line.slice(3)}</h2>`;
      if (line.startsWith('# '))
        return `<h1 class="text-3xl font-black text-white mt-10 mb-4">${line.slice(2)}</h1>`;
      if (line.trim() === '') return '<br />';
      return `<p class="text-slate-300 leading-relaxed mb-4">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')}</p>`;
    })
    .join('');
}
