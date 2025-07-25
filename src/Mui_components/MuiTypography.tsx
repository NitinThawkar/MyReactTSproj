import React from 'react'
import { Typography } from '@mui/material'

export const MuiTypography = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="body1">Body text</Typography>

      {/* Expandable Card Example */}
      <div style={{ maxWidth: 400, marginTop: 32 }}>
        <div style={{ border: '1px solid #ccc', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ padding: 16 }}>
            <Typography variant="h6">Expandable Card</Typography>
            <Typography variant="body2" color="text.secondary">
              This is a summary. Click below to expand.
            </Typography>
          </div>
          <div style={{ padding: '0 16px 16px 16px' }}>
            <button
              style={{
                background: 'none',
                border: 'none',
                color: '#1976d2',
                cursor: 'pointer',
                fontSize: 16,
                marginBottom: 8,
              }}
              onClick={handleExpandClick}
            >
              {expanded ? 'Collapse' : 'Expand'}
            </button>
            {expanded && (
              <Typography variant="body2" style={{ marginTop: 8 }}>
                This is the expanded content of the card. You can put more details here.
              </Typography>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
