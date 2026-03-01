import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legend | Nevada County Natural Resources Report',
};

const html = `



<table width="100%" border="0" cellspacing="0" cellpadding="0" height="6
">
  <tr>
    <td bgcolor="#CCCC99">
      <b class="header">Nevada County Natural Resources Report</b></td>
  </tr>
</table>
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td width="80%" valign="top">
      <p class="continued"><a href="/chapter3#part2"></a><span class="continued"><a href="javascript:history.go(-1);"><br>
        &lt;&lt; previous page</a></span><br>
        <br>
      <img src="/images/legend.gif" style="max-width:500px"><br>
        <br>
      </p>
      </td>
  </tr>
  <tr>
    <td width="80%" bgcolor="#CCCC99" nowrap><font size="1"><span class="normaltext"><font face="Verdana, Arial, Helvetica, sans-serif" size="-2">&copy;2002, Nevada County Planning Department.</font></span><font face="Verdana, Arial, Helvetica, sans-serif" size="-2"><span class="normaltext"><a href="mailto:Kateri.Harrison@co.nevada.ca.us"> Kateri.Harrison@co.nevada.ca.us</a> 
      &nbsp;</span></font>Design &copy;2002,&nbsp;<a href="http://www.centauria.com/" target="_blank" rel="noopener noreferrer">Centauria.com</a></font>
</td>
  </tr>
</table>

`;

export default function Page() {
  return (
    <article className="report-content prose prose-sm prose-slate max-w-none
      prose-headings:font-bold prose-h1:text-xl prose-h2:text-base prose-h3:text-sm
      prose-a:text-[#4a5722] prose-a:no-underline hover:prose-a:text-[#cc6600]
      prose-img:my-2">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
