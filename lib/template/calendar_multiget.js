import prop from './prop';

export default function calendarMultiget(object) {
  let hrefs = object.paths.map(p => `<d:href>${p}</d:href>`).join('');
  return `<c:calendar-multiget xmlns:c="urn:ietf:params:xml:ns:caldav"
                    xmlns:cs="http://calendarserver.org/ns/"
                    xmlns:d="DAV:">
    <d:prop>
      ${object.props.map(prop).join('')}
    </d:prop>
    ${hrefs}
  </c:calendar-multiget>`;
}
