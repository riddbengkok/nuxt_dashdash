# Token Expiration Settings

This document explains the configurable token expiration settings for Firebase authentication.

## Environment Variables

### Token Check Interval
```env
NUXT_PUBLIC_TOKEN_CHECK_INTERVAL=300000
```
- **Purpose**: How often to check token expiration (in milliseconds)
- **Default**: 300000ms (5 minutes)
- **Range**: 60000ms (1 minute) to 1800000ms (30 minutes)
- **Example**: `600000` = Check every 10 minutes

### Token Expiry Warning
```env
NUXT_PUBLIC_TOKEN_EXPIRY_WARNING=600000
```
- **Purpose**: When to show warning that token is expiring soon (in milliseconds)
- **Default**: 600000ms (10 minutes)
- **Range**: 300000ms (5 minutes) to 1800000ms (30 minutes)
- **Example**: `300000` = Show warning 5 minutes before expiry

### Token Expiry Threshold
```env
NUXT_PUBLIC_TOKEN_EXPIRY_THRESHOLD=300000
```
- **Purpose**: When to consider token expired and trigger refresh (in milliseconds)
- **Default**: 300000ms (5 minutes)
- **Range**: 60000ms (1 minute) to 600000ms (10 minutes)
- **Example**: `60000` = Consider expired 1 minute before actual expiry

## Configuration Examples

### Aggressive Token Management
```env
NUXT_PUBLIC_TOKEN_CHECK_INTERVAL=60000      # Check every 1 minute
NUXT_PUBLIC_TOKEN_EXPIRY_WARNING=300000     # Warn 5 minutes before
NUXT_PUBLIC_TOKEN_EXPIRY_THRESHOLD=60000    # Expire 1 minute before
```

### Conservative Token Management
```env
NUXT_PUBLIC_TOKEN_CHECK_INTERVAL=600000     # Check every 10 minutes
NUXT_PUBLIC_TOKEN_EXPIRY_WARNING=1800000    # Warn 30 minutes before
NUXT_PUBLIC_TOKEN_EXPIRY_THRESHOLD=600000   # Expire 10 minutes before
```

### Production Default
```env
NUXT_PUBLIC_TOKEN_CHECK_INTERVAL=300000     # Check every 5 minutes
NUXT_PUBLIC_TOKEN_EXPIRY_WARNING=600000     # Warn 10 minutes before
NUXT_PUBLIC_TOKEN_EXPIRY_THRESHOLD=300000   # Expire 5 minutes before
```

## How It Works

1. **Token Check**: System checks token every `TOKEN_CHECK_INTERVAL` milliseconds
2. **Warning Phase**: When token expires in `TOKEN_EXPIRY_WARNING` milliseconds, console warning is shown
3. **Expiry Phase**: When token expires in `TOKEN_EXPIRY_THRESHOLD` milliseconds, token is considered expired
4. **Auto Refresh**: Expired tokens are automatically refreshed
5. **Manual Refresh**: Users can manually refresh tokens via dashboard button

## Console Logs

### Token Settings Log
```
Token Settings: {
  checkInterval: "5 minutes",
  warningTime: "10 minutes", 
  expiryThreshold: "5 minutes"
}
```

### Token Info Log
```
Token Info: {
  tokenId: "eyJhbGciOiJSUzI1NiIs...",
  issuedAt: "12/7/2024, 9:30:00 PM",
  expiresAt: "12/7/2024, 10:30:00 PM",
  isExpired: false,
  timeUntilExpiry: "45 minutes",
  warningThreshold: "10 minutes",
  expiryThreshold: "5 minutes"
}
```

### Warning Log
```
Token will expire in 8 minutes
```

## Best Practices

### Development
- Use shorter intervals for testing
- Set warning time to 2-5 minutes
- Set threshold to 1-2 minutes

### Production
- Use longer intervals to reduce API calls
- Set warning time to 10-15 minutes
- Set threshold to 5-10 minutes

### Security
- Never set threshold to 0 (immediate expiry)
- Balance between security and user experience
- Monitor console logs for token issues

## Troubleshooting

### Token Expiring Too Quickly
- Increase `TOKEN_EXPIRY_THRESHOLD`
- Increase `TOKEN_EXPIRY_WARNING`

### Too Many Token Checks
- Increase `TOKEN_CHECK_INTERVAL`

### Users Getting Logged Out
- Check if `TOKEN_EXPIRY_THRESHOLD` is too aggressive
- Verify Firebase project settings
- Check network connectivity

## Environment File Example

```env
# Firebase Configuration
NUXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NUXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Token Expiration Settings (in milliseconds)
NUXT_PUBLIC_TOKEN_CHECK_INTERVAL=300000
NUXT_PUBLIC_TOKEN_EXPIRY_WARNING=600000
NUXT_PUBLIC_TOKEN_EXPIRY_THRESHOLD=300000
``` 