
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/schemas/*",
    out: "./drizzle",
    dialect: 'postgresql',
    dbCredentials: {
        user: "avnadmin",
        password: "AVNS_wUL0lCu-QBqIl5bG1Lx",
        host: "pg-351d76a1-client-manger.b.aivencloud.com",
        port: 18161,
        database: "defaultdb",
        ssl: {
            rejectUnauthorized: true,
            ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUP5HdfTQ+0/lLPuSjUf8A582B5tYwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvNWEwNmFiMWYtYmJiZi00MzBlLTk1YWEtZmU4MGQwYWYx
ZDdiIFByb2plY3QgQ0EwHhcNMjQwODE1MDcwNDA1WhcNMzQwODEzMDcwNDA1WjA6
MTgwNgYDVQQDDC81YTA2YWIxZi1iYmJmLTQzMGUtOTVhYS1mZTgwZDBhZjFkN2Ig
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAO3tkdji
vGes0OLJFaWim4iFpKPNUG+gN0xY7Sd7HkOsN9bVHRXGsaTSq0/ORFj3DDN4A9FB
+5skkYquAuyQm79VDgZti6lcENeVXEBD2YBO0ujMyQq20izFY+3DqertKj19rMlt
/eaxgqhv0hV3SE2uop1dpEmTz/frumcXd1msKT3CkI0i5M4PeV1BQG8lF43hukie
/qfvfJMocw90JDQO5H6b1AgxBv4g2i0KRPTHplelVTJxnZS65W6ibRlBnb2T5vv1
3tzLlARFw96jMWJmq4cJoIjWNk6F52+h/veIrI6PKWp4/mBlVUfhbPl6jG0m1psz
6VmwVLYlzavkF7dcTRaChkhTfoRGbZpcKaCdtUHs33AFR0KYUfJcC0gFUtXqRSq9
1msjpmn/i4Wm3aNQ3foEpa7/nLpYQ/jdt+VVQTZ0jrGAOVZInipy0lngSgwfokZu
xLsClp6X01646oG80fxtm2tIuolUYsTJjwjQX70LwtB/vBCaBiyVWM2qAwIDAQAB
oz8wPTAdBgNVHQ4EFgQUnjG7ulawM82nQyUhevF3hrwOo1swDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBABz/NiHaquTjGz5A
sDnvnij12aw89+ilhl/rZlIzBqIhcs9xW1fbKJyw/AuWuMVqpaAL3vZcPqPeQH5t
h7QsgoTGtzUnyG9CElckgfCQkb9/XhAUtX3dz8bg4cURl8yOpwxn3RG+GKry9uW0
I4BhrGe+PkYh163Wc4Grwj0S7XCgkBnqMB//pCwN0e4llMf9KsSVdMTfYhtvNxbi
VN2ESt42H23iiThxi3NRQaTQyUdAUTsa+pbBMYKJcpdahj95i+gq6suOM4mdykuQ
zrShwJq6tV3v/HrDZOranepzS+IrkDKVouS4zVvi6TjQhHwjyKy3y7FFtBRFGkJw
QGsYlYYebR4145Hg0fDB4NpUh/2zdeq4/tp56A8AROVNJl/AClMAD9jzn+wTSXwc
cco+BQicfgUxLbPwV6RG0DopMNwcgQymS32EMti3037KIbx7yFK/Tq3jyXo5oJVc
ycKkLiORCJUDw8BVi8zf1U+N/jGE+GH0kiMZz30D/4D78171fg==
-----END CERTIFICATE-----
`,
        },
    }
});




