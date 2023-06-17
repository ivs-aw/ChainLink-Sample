// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import { console } from "forge-std/console.sol";

/**
 * 試験的にMUDの情報を取得するためのスマートコントラクト
 */
contract GetInfo {
    // MUD contract address (mumbai network)
    address MUD_ADDRESS = 0x0b90377Db497D52F580896AC4Af8b4Bc2b7CFEd2;

    uint256 lastTimeStamp;
    // 実行間隔
    uint256 interval;

    //event GetMovieInfo(uint32 x, uint32 y);

    /**
     * コンストラクター
     */
    constructor(uint256 _interval) {
        interval = _interval;
        console.log("deploy success!!");
    }

    /**
     * get move info from MUD contract
     */
    function getNftName() public view returns (string memory) {
        //IWorld mud = IWorld(MUD_ADDRESS);
        //console.log("mud info:", nft.name());

        return "test";
    }

    /**
     * 定められた実行間隔のタイミングになったかチェックするためのメソッド
     */
    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        returns (bool upkeepNeeded, bytes memory /* performData */)
    {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
    }

    /**
     * 定められた実行間隔のタイミングになったらコントラクトのメソッドを実行するメソッド
     * このサンプルでは intervalごとにgrowFlowerメソッドを呼び出してトークンURIの内容を変えるといったもの
     */
    function performUpkeep(bytes calldata /* performData */) external {
        //We highly recommend revalidating the upkeep in the performUpkeep function
        if ((block.timestamp - lastTimeStamp) > interval) {
            lastTimeStamp = block.timestamp;
            // 呼び出したい処理をここに書く
            // 今回の場合であれば growFlowerメソッドを呼び出す。
            string memory name = getNftName();

            //emit GetNftName(name);
        }
    }
}
