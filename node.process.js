/* process 객체 */

/*
process 객체의 속성
argv, env, version, versions, arch, platform
*/

/*
process 객체의 메서드
exit([exitCode = 0])
memoryUsage()
uptime()
*/

// process.argv 속성과 exit 메서드
// cmd: node node.process.js --exit 10000
process.argv.forEach((item, index) => {
    console.log(`${index} : ${typeof(item)} : ${item}`);

    // 실행 매개변수에 --exit가 있을 때
    if (item == '--exit'){
        // 다음 실행 매개변수를 얻음
        let exitTime = Number(process.argv[index+1]);

        //일정 시간 후 프로그램 종료
        setTimeout(() => {
            process.exit();
        }, exitTime);
    }
});

console.log(`-process.env: ${process.env}`);
console.log(`-process.version: ${process.version}`);
console.log(`-process.versions: ${process.versions}`);
console.log(`-process.arch: ${process.arch}`);
console.log(`-process.platform: ${process.platform}`);
console.log(`-process.connected: ${process.connected}`);
console.log(`-process.execArgv: ${process.execArgv}`);
console.log(`-process.exitCode: ${process.exitCode}`);
console.log(`-process.mainModule: ${process.mainModule}`);
console.log(`-process.release: ${process.release}`);
console.log(`-process.memoryUsage(): ${process.memoryUsage()}`);
console.log(`-process.uptime(): ${process.uptime()}`);
console.log(`-process.uptime(): ${process.uptime()}`);
console.log(`-process.uptime(): ${process.uptime()}`);
