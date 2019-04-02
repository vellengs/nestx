import React from 'react';
import { formatMessage } from 'umi-plugin-react/locale';
import Link from 'umi/link';
import { Exception } from 'ant-design-pro';

const Exception403 = () => (
  <Exception
    type="403"
    desc={formatMessage({ id: 'app.exception.description.403' })}
    linkElement={Link as any}
    backText={formatMessage({ id: 'app.exception.back' })}
  />
);

export default Exception403;
