declare module "tls" {
    export var checkServerIdentity: (servername: string, cert: string | Buffer | (string | Buffer)[]) => any;
}
