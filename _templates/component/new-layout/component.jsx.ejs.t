---
to: src/components/layout/<%=name%>/<%=name%>.jsx
---
import React from 'react';

import <%=name%>View from './<%=name%>.view';

const <%= name %> = () => {
  return <<%=name%>View></<%=name%>View>;
};

<%=name%>.displayName = '<%=name%>';
<%=name%>.defaultProps = {};

export default React.memo(<%=name%>);
